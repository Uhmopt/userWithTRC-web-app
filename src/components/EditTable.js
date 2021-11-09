import { Clear, Delete, Done, Edit } from '@mui/icons-material'
import {
  IconButton,
  Input,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { useEffect } from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  selectTableCell: {
    width: 60,
  },
  tableCell: {
    width: 130,
    height: 40,
  },
  input: {
    width: 130,
    height: 40,
  },
}))

const CustomTableCell = ({
  row = {},
  name = '',
  onChange = () => {},
  disableEditList = [],
}) => {
  const classes = useStyles()
  const { isEditMode } = row
  const disabled = disableEditList.includes(name)
  disableEditList = ['level_degree']
  return (
    <TableCell align="left" className={classes.tableCell}>
      {isEditMode ? (
        <Input
          value={row[name]}
          name={name}
          onChange={(e) => onChange(e, row)}
          className={classes.input}
          disabled={disabled}
        />
      ) : (
        row[name]
      )}
    </TableCell>
  )
}

function EditTable({
  rowList = [],
  itemList = [],
  disableEditList = ['level_degree'],
  onSave = () => {},
  isDeleteAble = true,
}) {
  const [rows, setRows] = React.useState([])
  const [previous, setPrevious] = React.useState({})
  const classes = useStyles()

  useEffect(() => {
    const tmpRowList = rowList.map((row) => {
      return {
        ...row,
        isEditMode: false,
      }
    })
    setRows(tmpRowList)
  }, [rowList])

  const onToggleEditMode = (id) => {
    setRows((state) => {
      return rows.map((row) => {
        if (row.id === id) {
          return { ...row, isEditMode: !row.isEditMode }
        }
        return row
      })
    })
  }

  const onChange = (e, row) => {
    console.log(e, row)
    if (!previous[row.id]) {
      setPrevious((state) => ({ ...state, [row.id]: row }))
    }
    const value = e.target.value
    const name = e.target.name
    const { id } = row
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [name]: value }
      }
      return row
    })
    setRows(newRows)
  }

  const onRevert = (id) => {
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return previous[id] ? previous[id] : row
      }
      return row
    })
    setRows(newRows)
    setPrevious((state) => {
      delete state[id]
      return state
    })
    onToggleEditMode(id)
  }

  const onDelete = (id) => {
    alert(`Delete the ${id} User`)
  }

  const handleSave = (row) => {
    onToggleEditMode(row.id)
    typeof onSave === 'function' ? onSave(row) : console.log('error')
  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="caption table">
        {/* <caption>A barbone structure table example with a caption</caption> */}
        <TableHead>
          <TableRow>
            <TableCell align="left">Action</TableCell>
            {(itemList ?? []).map((item, index) => (
              <TableCell key={index} align="left">
                {item?.label ?? ''}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className={classes.selectTableCell}>
                {row?.isEditMode ?? false ? (
                  <>
                    <IconButton
                      aria-label="done"
                      onClick={() => handleSave(row)}
                    >
                      <Done />
                    </IconButton>
                    {isDeleteAble ? (
                      <IconButton
                        aria-label="delete"
                        onClick={() => onDelete(row.id)}
                      >
                        <Delete />
                      </IconButton>
                    ) : null}
                    <IconButton
                      aria-label="revert"
                      onClick={() => onRevert(row.id)}
                    >
                      <Clear />
                    </IconButton>
                  </>
                ) : (
                  <IconButton
                    aria-label="edit"
                    onClick={() => onToggleEditMode(row.id)}
                  >
                    <Edit />
                  </IconButton>
                )}
              </TableCell>
              {itemList.map((item, index) => (
                <CustomTableCell
                  key={index}
                  {...{ row, name: item?.key ?? '', onChange }}
                  disableEditList={disableEditList}
                />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default EditTable
