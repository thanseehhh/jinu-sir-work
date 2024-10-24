export const notfound = (req,res, next) => {
    const error = new Error(`not found - ${req.originalURL}`);
    Res.status(404);
    next(error);

};

export const errorHandler = (err,req,res,next) => {
    const statuscode = res.statuscode === 200 ? 300 : res.statuscode
    res.json({
        message : err.message,
        stack : process.env.NODE_ENV === 'production' ? null : err.stack,

    });
}