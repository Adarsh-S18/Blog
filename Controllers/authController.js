const loginAdmin = async (req, res) => {
    try {
      const { username, password } = req.body;
        if (username === 'adarshspillai2001@gmail.com' && password === 'Admin') {
        console.log('Login successful');
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Incorrect username or password' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  module.exports = {
    loginAdmin,
  };
  