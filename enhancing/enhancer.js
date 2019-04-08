module.exports = {
    succeed,
    fail,
    repair,
    get,
};

function succeed( item ) {
    let enhancement = 0;
    
    if ( item.enhancement ) {
        if ( item.enhancement < 20 ) {
            enhancement = item.enhancement + 1;
        } else {
            enhancement = 20;
        }
    }
    
    return { ...item, enhancement };
}

function fail( item ) {
    
    let durability = 0;
    if ( item.enhancement && item.durability ) {
        if ( item.enhancement < 15 ) {
            durability = item.durability - 5;
        } else if ( item.enhancement >= 15 ) {
            durability = item.durability - 10;
        }
    }
    
    if ( durability < 0 ) {
        durability = 0;
    }
    
    let enhancement = 0;
    if ( item.enhancement ) {
        if ( item.enhancement > 16 ) {
            enhancement = item.enhancement - 1;
        } else {
            enhancement = item.enhancement;
        }
    }
    
    return { ...item, enhancement, durability };
}

function repair( item ) {
    return { ...item, durability: 100 };
}

function get( item ) {
    
    let name = "";
    if ( item.name ) {
        if ( item.enhancement > 0 ) {
            name = `[+${ item.enhancement }] ${ item.name }`;
        } else {
            name = item.name;
        }
    }
    
    return { ...item, name };
}
