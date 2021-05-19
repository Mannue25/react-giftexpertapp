import React, { Fragment, useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

const GifExpertApp = () => {
  //const categories = ['One Punch', 'Samurai X', 'Dragon Ball']

  const [categories, setCategories] = useState(["Dragon Ball"]);

  /*const handleApp = () => {
       setCategories([...categories, 'XMEN'])
    }*/

  return (
    <Fragment>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </Fragment>
  );
};

export default GifExpertApp;
