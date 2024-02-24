import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "../components/PostAuthor";
import Thumbnail from "../images/blog23.jpg";
import MetaData from "../components/MetaData";
import { HelmetProvider } from "react-helmet-async";

const PostDetail = () => {
  return (
    <HelmetProvider>
      <section className="post_detail">
        <MetaData title="Post Info" />
        <div className="container post_detail__container">
          <div className="post_detail__header">
            <PostAuthor />
            <div className="post_detail__buttons">
              <Link to={`/posts/werwer/edit`} className="btn sm primary">
                Edit
              </Link>
              <Link to={`/posts/werwer/delete`} className="btn sm danger">
                Delete
              </Link>
            </div>
          </div>
          <h1>This is the post title!</h1>
          <div className="post_detail__thumbnail">
            <img src={Thumbnail} alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
            nec magna at ultrices. Duis sem lectus, ultricies placerat tortor
            vel, maximus imperdiet arcu. Praesent in sodales leo, nec mattis
            eros. Nulla sed ante libero. Mauris fermentum tortor turpis, ac
            hendrerit tortor congue vel. Vestibulum dignissim diam eget
            dignissim hendrerit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
            nec magna at ultrices. Duis sem lectus, ultricies placerat tortor
            vel, maximus imperdiet arcu. Praesent in sodales leo, nec mattis
            eros. Nulla sed ante libero. Mauris fermentum tortor turpis, ac
            hendrerit tortor congue vel. Vestibulum dignissim diam eget
            dignissim hendrerit Duis sem lectus, ultricies placerat tortor vel,
            maximus imperdiet arcu. Praesent in sodales leo, nec mattis eros.
            Nulla sed ante libero. Mauris fermentum tortor turpis, ac hendrerit
            tortor congue vel. Vestibulum dignissim diam eget dignissim
            hendrerit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
            nec magna at ultrices. Duis sem lectus, ultricies placerat tortor
            vel, maximus imperdiet arcu. Praesent in sodales leo, nec mattis
            eros. Nulla sed ante libero. Mauris fermentum tortor turpis, ac
            hendrerit tortor congue vel. Vestibulum dignissim diam eget
            dignissim hendrerit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quae
            eveniet, enim illo cum optio quod eligendi, ex tempora quibusdam
            animi dolorem ad dolor quisquam. Consequuntur, mollitia debitis
            praesentium consectetur cum illum id dolores temporibus voluptatum
            esse veniam unde accusantium expedita tempora fuga maiores dolorum
            minus laboriosam aliquid eligendi nulla! Inventore ullam doloremque
            eligendi corporis natus quas explicabo ex possimus id eum odio quos
            dolor, earum laboriosam, modi laborum dicta amet a nisi, ea
            aspernatur deleniti accusantium iure. Sequi voluptatum error, nobis
            quasi excepturi asperiores quo obcaecati. Natus placeat perferendis
          </p>
          <p>
            doloribus quidem alias, rem a maiores. Iusto architecto maxime in.
            Corporis sequi praesentium sint aperiam, neque blanditiis pariatur,
            eos officia temporibus assumenda ullam esse facilis aliquam deleniti
            fuga saepe ea dolores amet, aut sit reprehenderit dolore. Ducimus
            velit at nobis dolores? Nobis, quidem doloribus. At, id tenetur
            fugit tempore, facilis eum dicta et aliquid modi quibusdam tempora
            incidunt iure ipsum rem qui, perspiciatis dolorem blanditiis nihil
            dignissimos possimus nemo beatae autem aliquam ducimus! Perspiciatis
            id iusto similique non consequuntur blanditiis deleniti commodi
            laboriosam, consequatur obcaecati, rerum voluptate nam earum
            voluptatem voluptas totam corporis cum, minima quis eius. Impedit,
            adipisci facere non accusamus laboriosam a aut, vero, magni suscipit
            fugiat ullam.
          </p>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default PostDetail;
