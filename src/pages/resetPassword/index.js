import LockIcon from '@mui/icons-material/Lock'
import { Button, Grid } from '@mui/material'
import CustomInput from 'components/CustomInput'
import Logo from 'components/Logo'
import MainTitle from 'components/MainTitle'
import Layout from 'layouts'
import notification from 'lib/notification'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { resetPassword } from 'store/actions/auth'

const defaultResetInfo = {
	password: '',
	rePassword: '',
}

export default function ResetPassword() {
	const {t} = useTranslation()
	const [currentState, setCurrentState] = useState(defaultResetInfo)
	const user = useSelector((state) => state.auth.user)
	const dispatch = useDispatch()
	const history = useHistory()

	const handleChange = (e) => {
		setCurrentState((prvState = defaultResetInfo) => ({
			...(prvState ?? defaultResetInfo),
			[e.target.name]: e.target.value,
		}))
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		if (
			(currentState?.password ?? '').length < 8 ||
			currentState?.password !== currentState.rePassword
		) {
			return false
		}
		dispatch(
			resetPassword(
				user?.user_email ?? '',
				user?.user_verify_code ?? '',
				currentState?.password ?? '',
			),
		).then((res) => {
			Boolean(res?.result ?? false)
			if (res?.result ?? false) {
				history.push('/home')
				notification('success', t(res?.msg) ?? 'success')
			} else {
				notification('error', t(res?.msg) ?? 'Please make sure your network connection..')
			}
			Promise.resolve()
		})
	}
	return (
		<Layout>
			<form onSubmit={handleSubmit}>
				<Grid container rowSpacing={3}>
					<Grid item xs={12}>
						<Logo variant="icon" className="text-main m-auto" />
					</Grid>
					<Grid item xs={12}>
						<MainTitle title={t('resetPassword')} isLine={true} />
					</Grid>
					<Grid item xs={12}>
						<CustomInput
							isPassword={true}
							name="password"
							label={t('password')}
							type="password"
							placeholder={t('passwordDscrpt')}
							startIcon={<LockIcon className="text-main" />}
							value={currentState?.password ?? ''}
							onChange={handleChange}
							errorText={t('passwordOver')}
							errorState={
								!Boolean(currentState?.password)
									? false
									: (currentState?.password ?? '').length < 8
							}
						/>
					</Grid>
					<Grid item xs={12}>
						<CustomInput
							isPassword={true}
							name="rePassword"
							type="password"
							label={t('confirmPassword')}
							placeholder={t('confirmPassword')}
							startIcon={<LockIcon className="text-main" />}
							value={currentState?.rePassword ?? ''}
							onChange={handleChange}
							errorText={t('passwordNotMatch')}
							errorState={currentState?.password !== currentState.rePassword}
						/>
					</Grid>
					<Grid item xs={12}>
						<Button variant="contained" size="large" type="submit" fullWidth>
							Submit
						</Button>
					</Grid>
				</Grid>
			</form>
		</Layout>
	)
}
