module.exports = (objRep) => {
    const { monkeys } = objRep;
    return (req, res, next) => {
        if (typeof req.body.name === 'undefined' ||
        typeof req.body.sex === 'undefined' ||
        typeof req.body.species === 'undefined') {
        return res.status(400).json({ error: 'Missing name, sex or species' });
    }
        const newMonkey = {
        id: objRep.nextMonkeyId,
        name: req.body.name,
        sex: req.body.sex,
        species: req.body.species
    };
        monkeys.push(newMonkey);
        objRep.nextMonkeyId++;
        res.locals.monkey = newMonkey;
        return next();
    };
};
