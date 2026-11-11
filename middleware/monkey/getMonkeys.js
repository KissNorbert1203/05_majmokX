module.exports = (objRep) => {
    const { monkeys } = objRep;
    return (req, res, next) => {
        console.table(monkeys);
        res.locals.monkeys = monkeys;
        return next();
    };
};