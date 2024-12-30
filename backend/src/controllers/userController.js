import Users from "../models/userModel.js";

export const getUserProfile = async (req, res, next) => {
  try {
    const user = await Users.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ status: "error", message: "User not found." });
    }
    res.status(200).json({ status: "success", data: user });
  } catch (error) {
    next(error);
  }
};

export const updateUserProfile = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const updatedUser = await Users.findByIdAndUpdate(
      req.user.id,
      { name, email },
      { new: true }
    ).select("-password");

    res.status(200).json({ status: "success", data: updatedUser });
  } catch (error) {
    next(error);
  }
};
