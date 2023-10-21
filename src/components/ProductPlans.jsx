import React from 'react';

const ProductPlans = () => {
    const startLearningNow = "START LEARNING NOW"

    const plansTitle = "Choose the plan that best suits you."
    const plansDescription = "Any plan gives you full access to our platform!"

    const plansMonthlyTitle = "MONTHLY"
    const plansMonthlyPrice = "39 / month"

    const plansAnnualRecommended = "Recommended"
    const plansAnnualTitle = "ANNUAL"
    const plansAnnualPrice = "279 / year"
    const plansAnnualSaving = "Save 40% vs. montlhy, that's $189 a year!"

    const plansLifeTimeTitle = "LIFETIME"
    const plansLifeTimePrice = "999"
    const plansLifeTimeSaving = "Only pay once, ever"

    return (
        <>
            <section id="plans" className="main-plans-container">
                <div className="plans--title">
                    <h2>{plansTitle}</h2>
                    <p>{plansDescription}</p>
                </div>
                <section className="plans-container--slider">
                    <article className="plans-container--card">
                        <div className="plan-info-container">
                            <h3 className="plan-card--title">{plansMonthlyTitle}</h3>
                            <p className="plan-card--price"><span>$</span> {plansMonthlyPrice}</p>
                            <p className="plan-card--saving">-</p>
                            <button className="plan-card-ca">{startLearningNow} <span></span></button>
                        </div>
                    </article>
                    <article className="plans-container--card">
                        <p className="recommended">{plansAnnualRecommended}</p>
                        <div className="plan-info-container">
                            <h3 className="plan-card--title">{plansAnnualTitle}</h3>
                            <p className="plan-card--price"><span>$</span> {plansAnnualPrice}</p>
                            <p className="plan-card--saving">{plansAnnualSaving}</p>
                            <button className="plan-card-ca">{startLearningNow} <span></span></button>
                        </div>
                    </article>
                    <article className="plans-container--card">
                        <div className="plan-info-container">
                            <h3 className="plan-card--title">{plansLifeTimeTitle}</h3>
                            <p className="plan-card--price"><span>$</span> {plansLifeTimePrice}</p>
                            <p className="plan-card--saving">{plansLifeTimeSaving}</p>
                            <button className="plan-card-ca">{startLearningNow} <span></span></button>
                        </div>
                    </article>
                </section>
            </section>
        </>
    );
};

export default ProductPlans;