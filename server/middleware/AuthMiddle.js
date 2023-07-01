import jwt from "jsonwebtoken";

const secret = "test";

const AuthMiddle = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const customAuth = token.length < 500;
    let decodedData;

    if (token && customAuth) {
      decodedData = jwt.verify(token, secret);
      req.userId = decodedData?.id;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default AuthMiddle;
