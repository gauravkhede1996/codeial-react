import styles from '../styles/home.module.css';
import PropTypes from 'prop-types';
const Home=({posts})=>{
    return (
        <div className={styles.postsList}>
            {posts.map(post=>
                <div className={styles.postWrapper} key={`post-${post._id}`}>
                <div className={styles.postHeader}>
                  <div className={styles.postAvatar}>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/4333/4333609.png"
                      alt="user-pic"
                    />
                    <div>
                      <span className={styles.postAuthor}>{post.user.name}</span>
                      <span className={styles.postTime}>a minute ago</span>
                    </div>
                  </div>
                  <div className={styles.postContent}>{post.content}</div>
        
                  <div className={styles.postActions}>
                    <div className={styles.postLike}>
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/2961/2961957.png"
                        alt="likes-icon"
                      />
                      <span>{post.likes.length}</span>
                    </div>
        
                    <div className={styles.postCommentsIcon}>
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/3031/3031126.png"
                        alt="comments-icon"
                      />
                      <span>{post.comments.length}</span>
                    </div>
                  </div>
                  <div className={styles.postCommentBox}>
                    <input placeholder="Start typing a comment" />
                  </div>
        
                  <div className={styles.postCommentsList}>
                    <div className={styles.postCommentsItem}>
                      <div className={styles.postCommentHeader}>
                        <span className={styles.postCommentAuthor}>Bill</span>
                        <span className={styles.postCommentTime}>a minute ago</span>
                        <span className={styles.postCommentLikes}>22</span>
                      </div>
        
                      <div className={styles.postCommentContent}>Random comment</div>
                    </div>
                  </div>
                </div>
              </div>)}
          
        </div>
      );
}
Home.prototype={
    posts:PropTypes.array.isRequired,
}
export default Home;