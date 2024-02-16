import { BlogModel } from "../model/blogModel.js";

export const GetAllBlogs = async (req, res) => {
  try {
    const blog = await BlogModel.find({});
    res.send(blog);
  } catch (error) {
    res.send(error.message);
  }
};

export const GetBlogByID = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await BlogModel.findById(id);
    res.send(blog);
  } catch (error) {
    res.send(error.message);
  }
};

export const PostOneBlog = async (req, res) => {
  try {
    const {
      thumbnail,
      image1,
      image2,
      image3,
      image4,
      image5,
      title,
      desc,
      sub1,
      sub2,
      sub3,
      sub4,
      sub5,
      name1,
      name2,
      name3,
      name4,
      name5,
    } = req.body;
    const newBlog = new BlogModel({
      thumbnail,
      image1,
      image2,
      image3,
      image4,
      image5,
      title,
      desc,
      sub1,
      sub2,
      sub3,
      sub4,
      sub5,
      name1,
      name2,
      name3,
      name4,
      name5,
    });
    await newBlog.save();
    res.send("New Blog Added!");
  } catch (error) {
    res.send(error.message);
  }
};

export const UpdateBlogByID = async (req, res) => {
  try {
    const {
      thumbnail,
      image1,
      image2,
      image3,
      image4,
      image5,
      title,
      desc,
      sub1,
      sub2,
      sub3,
      sub4,
      sub5,
      name1,
      name2,
      name3,
      name4,
      name5,
    } = req.body;
    const { id } = req.params;
    const blog = await BlogModel.findByIdAndUpdate(id, {
      thumbnail,
      image1,
      image2,
      image3,
      image4,
      image5,
      title,
      desc,
      sub1,
      sub2,
      sub3,
      sub4,
      sub5,
      name1,
      name2,
      name3,
      name4,
      name5,
    });
    res.send("Blog Updated!");
  } catch (error) {
    res.send(error.message);
  }
};

export const DeleteBlogByID = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await BlogModel.findByIdAndDelete(id);
    res.send("Blog Deleted!");
  } catch (error) {
    res.send(error.message);
  }
};
