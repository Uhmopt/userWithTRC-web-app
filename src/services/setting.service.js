// Note: Get levelList items( label, value ) for table
export const getInitSetting = (settingList = []) => {
  let settings = {
    isRegister: true,
    isLogin: true,
    isUpgrade: true,
    adminEmail: '',
    smtpUser: '',
    smtpPass: '',
    specifiedUser: 0,
  }

  settingList.forEach((setting) => {
    switch (setting.set_item_name) {
      case 'set_specified_user':
        settings.specifiedUser = setting.set_item_value
        break
      case 'set_admin_email':
        settings.adminEmail = setting.set_item_value
        break
      case 'set_allow_register':
        settings.isRegister = setting.set_item_value === '1'
        break
      case 'set_allow_login':
        settings.isLogin = setting.set_item_value === '1'
        break
      case 'set_allow_upgrade':
        settings.isLogin = setting.set_item_value === '1'
        break
      case 'set_smtp_pass':
        settings.smtpPass = setting.set_item_value
        break
      case 'set_smtp_user':
        settings.smtpUser = setting.set_item_value
        break
      default:
        console.log('sss')
    }
  })
  return settings
}

// Note: Get levelList items( label, value ) for table
export const updateAmount = async (userId = 0, amount) => {}
