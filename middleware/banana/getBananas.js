module.exports = (objRep) => {
    const { bananas } = objRep;
    return (req, res, next) => {
        console.table(bananas);
        res.locals.bananas = bananas;
        return next();
    };
};
