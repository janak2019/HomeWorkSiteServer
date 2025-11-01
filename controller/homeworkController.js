import Homework from "../models/Homework.js";

// ✅ Upload (Create)
export const createHomework = async (req, res) => {
  try {
    const { title, description, fileUrl } = req.body;

    const homework = await Homework.create({
      title,
      description,
      fileUrl,
      user: req.user.id, // from verifyToken middleware
    });

    res.status(201).json({
      message: "Homework uploaded successfully",
      homework,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// ✅ Get all homework by logged-in user
export const getUserHomework = async (req, res) => {
  try {
    const homeworkList = await Homework.find({ user: req.user.id });
    res.status(200).json(homeworkList);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// ✅ Get single homework
export const getHomeworkById = async (req, res) => {
  try {
    const homework = await Homework.findOne({
      _id: req.params.id,
      user: req.user.id,
    });
    if (!homework) return res.status(404).json({ message: "Not found" });
    res.status(200).json(homework);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// ✅ Update homework
export const updateHomework = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const updated = await Homework.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { title, description, status },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// ✅ Delete homework
export const deleteHomework = async (req, res) => {
  try {
    const deleted = await Homework.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ message: "Homework deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
