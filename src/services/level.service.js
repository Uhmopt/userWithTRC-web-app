// Note: Change level list for select list
export const getDropDownLevelList = ( levelList=[] ) => {
    levelList = levelList.map((level)=>{
        return {
            label: 'Level ' + level?.level_degree ?? '',
            value: level?.level_degree ?? ''
        }
    })
    return levelList;
  }