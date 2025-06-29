import Complaint from "../models/complaint.model.js";

export const createComplaint = async (req, res) => {
  const doc = await Complaint.create({ ...req.body, user: req.user._id });
  res.status(201).json(doc);
};

export const myComplaints = async (req, res) => {
  const list = await Complaint.find({ user: req.user._id });
  res.json(list);
};

export const updateStatus = async (req, res) => {
  const comp = await Complaint.findById(req.params.id);
  if (!comp) return res.status(404).json({ msg: "Not found" });
  comp.status = req.body.status || comp.status;
  await comp.save();
  res.json(comp);
};
