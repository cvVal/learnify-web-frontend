import React from 'react';
import { Link } from 'react-router-dom';
import ProductPlans from './ProductPlans';
import '../styles/Home.scss';
import '../styles/ProductPlans.scss';

const Home = () => {

    const seeAllCourses = "SEE ALL COURSES"
    const cardClockTitle = "Learn at your pace"
    const cardClockBody = "With the freedom to set your own schedule, our self-driven courses built by experts allow you to learn when and where you learn the best."
    const cardEyeTitle = "Get promoted"
    const cardEyeBody = "Our intermediate and advanced courses help you continue to build your skills so that you can land senior roles and be recognized as a top tech professional."
    const cardDollarTitle = "Invest in your self"
    const cardDollarBody = "Obtain a sense of accomplishment by elevating your technical skills to the next level and unlocking your real potential."
    const cardCheckTitle = "Build a portfolio of projects that make you stand out"
    const cardCheckBody = "The projects we'll help you build are professional, real-world apps that will make your portfolio stand out and impress potential employers."

    return (
        <main>
            <section className="main-image-container">
                <div className="background-img"></div>
            </section>
            <section className="main-product-detail">
                <div className="product-detail--button">
                    <Link to='/courses'>
                        <button>{seeAllCourses}</button>
                    </Link>
                </div>
                <section className="product-cards--container">
                    <article className="product-detail--card order-clock">
                        <span className="icon-card clock"></span>
                        <p className="product--card-title">{cardClockTitle}</p>
                        <p className="product--card-body">{cardClockBody}</p>
                    </article>
                    <article className="product-detail--card">
                        <span className="icon-card eye"></span>
                        <p className="product--card-title">{cardEyeTitle}</p>
                        <p className="product--card-body">{cardEyeBody}</p>
                    </article>
                    <article className="product-detail--card">
                        <span className="icon-card dollar-sign"></span>
                        <p className="product--card-title">{cardDollarTitle}</p>
                        <p className="product--card-body">{cardDollarBody}</p>
                    </article>
                    <article className="product-detail--card">
                        <span className="icon-card check-circle"></span>
                        <p className="product--card-title">{cardCheckTitle}</p>
                        <p className="product--card-body">{cardCheckBody}</p>
                    </article>
                </section>
            </section>
            <ProductPlans />
        </main>
    );
};

export default Home;