import React from 'react'
import {RegisterBg} from '../../assets'
import './detailBlog.scss'
import {useHistory} from 'react-router-dom'
import { Link } from '../../components'

const DetailBlog = () => {
    const history = useHistory();
    return (
        <div className="detail-blog-wrapper">
            <img className="img-cover" src={RegisterBg} />
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - DatePost</p>
            <p className="blog-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet eros non metus malesuada laoreet. Donec viverra in lorem vitae tincidunt. Donec elementum, lacus vel lobortis cursus, tortor tortor tristique nunc, non ornare odio quam vitae justo. Nulla sagittis, nunc vitae faucibus malesuada, sem orci varius est, vitae luctus nunc lacus et diam. Aliquam faucibus leo et nulla auctor, eleifend mollis turpis laoreet. In eros metus, lacinia id elit in, commodo rhoncus dolor. In euismod tortor a semper molestie. Mauris nunc dui, posuere sodales urna ut, auctor euismod diam. Phasellus suscipit hendrerit purus semper egestas. Fusce tempus id mi eu rutrum. Aliquam dapibus leo et velit scelerisque, at elementum ligula vulputate.</p>
            <Link title="Kembali ke Home" onClick={()=>history.push('/')} />
        </div>
    )
}

export default DetailBlog
