export const tokenizeMiddleware = async (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).json({ msg: "No authentication token, authorization denied" });

  try {    
    if(token===process.env.apikey)   
      next();
    else
        res.status(401).json({ msg: "Authentication token is not valid" });  
  } catch (err) {
    res.status(401).json({ msg: "Authentication token is not valid" });
  }
};