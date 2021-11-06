export const levelOrder = (numbre=0) => {

    switch (Number(numbre)){
        case 0: return "Registered"
        case 1: return "First"
        case 2: return "Second"
        case 3: return "Third"
        case 4: return "Fourth"
        case 5: return "Fifth"
        case 6: return "Sixth"
        case 7: return "Seventh"
        case 8: return "Eighth"
        case 9: return "Ninth"
        case 10: return "Tenth"
        case 11: return "Eleventh"
        case 12: return "Twelfth"
        case 13: return "Thirteenth"
        case 14: return "Fourteenth"
        case 15: return "Fifteenth"
        case 16: return "Sixteenth"
        case 17: return "Seventeenth"
        case 18: return "Eighteenth"
        case 19: return "Nineteenth"
        case 20: return "Twentieth"
        default: return "Registered"
    }
    
}

export const getMaxLevel = (levelList=[]) => {
    const max = (levelList ?? []).find((level = {}) => level.devel_amount === 0)
    ?.level_degree ?? (levelList ?? []).length - 1
    return max ?? 16
}

export const getLevels = (levelList=[]) => {
    
    levelList = levelList.filter(
        (level = {}) =>
          (level?.level_amount ?? 0) > 0 && level?.level_degree !== 0
    )
    return levelList ?? []
}