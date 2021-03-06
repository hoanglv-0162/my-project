import React from 'react'
import { AVATAR } from '../../ImageList'
import Avatar from "@mui/material/Avatar"
import "./Style-PostItem.css"

export default function PostItem(props) {
  const { data } = props
  return (
    <div className="post__container">
        {/* Header -> username + avatar + local */}
        <div className="post__header">
            <div className="post__header--block-left">
                <div className="post__header--avatar">
                    <Avatar alt="" src={data.avatarUrl} /> 
                </div>
            </div>
            <div className="post__header--username">
                <a href="#">{data.userName}</a>
            </div>
            <div className="post__item--block-right">
                <div className="post__header--more-option">
                    <span>
                        <i className="bx bx-dots-horizontal-rounded"></i>
                    </span>
                </div>
            </div>
        </div>
        {/* image  */}
        <div className="post__image">
            <img src={data.imageUrl} alt="p-1" />
        </div>

        <div className="post__group-bottom">
        {/* Group of interactive icons */}
        <div className="post__group-bottom">
          <div className="icons">
            <div className="icons-left">
              <span>
                <i className="bx bx-heart"></i>
              </span>
              <span>
                <i className="bx bx-message-rounded"></i>
              </span>
              <span>
                <i className="bx bx-paper-plane"></i>
              </span>
            </div>
            <div className="icons-right">
              <span>
                <i className="bx bx-bookmark"></i>
              </span>
            </div>
          </div>
          <div className="post__interactive-info">
            <a href="/#">
              <span>321</span> lượt thích
            </a>
          </div>
        </div>
        {/* Username + Caption */}
        <div className="post__caption">
          <div className="post__caption--user">
            <span className="user-name">
              <a href="/#">{data.userName}</a>
            </span>
            &nbsp;
            <span dangerouslySetInnerHTML={{__html: data.caption}} className="caption"></span>
          </div>
          {/* Time */}
          <p className="post__caption--time"><span>1</span> Ngày trước</p>
        </div>
        {/* input field for comment */}
        <div className="post__comment">
            <form>
                <span>
                    <i className='bx bx-smile'></i>
                </span>
                <input type="text" placeholder="Thêm bình luận..." />
                <button className="btn btn-post-comment">Đăng</button>
            </form>
        </div>
      </div>
        {/* react icon */}
        {/* username + caption */}
        {/* time */}
        {/* input comment */}
    </div>
  )
}
