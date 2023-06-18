
import {getSortedPostsData} from '../../lib/posts';

export default function handler(req, res) {
    const postData = getSortedPostsData();
    res.status(200).json(postData);
  }