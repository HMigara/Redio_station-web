import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";
import Voting from "../voting/Voting";

const Menu = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.second}>
          <h2 className={styles.subtitle}>{"What's hot"}</h2>
          <h1 className={styles.title}>Most Popular Wadan</h1>
          <MenuPosts withImage={false} />
          <h2 className={styles.subtitle}>Discover by topic</h2>
          <h1 className={styles.title}>Categories</h1>
          <MenuCategories />
          <h2 className={styles.subtitle}>Chosen by the editor</h2>
          <h1 className={styles.title}>HOT Picks</h1>
          <MenuPosts withImage={true} />
        </div>
        <h2 className={styles.subtitle}>Vote for Your Favorite Song !</h2>
        <h1 className={styles.title}>Weekly songs</h1>
        <Voting />
      </div>
    </>
  );
};

export default Menu;
