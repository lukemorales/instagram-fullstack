const Post = require('../models/Post');

module.exports = {
  async store(req, res) {
    const post = await Post.findByIdAndDelete(req.params.id);

    req.io.emit('delete', req.params.id);

    return res.json(post);
  },
};
