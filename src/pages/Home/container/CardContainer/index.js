import React from "react";
import {CardTitle} from "../../components/Card/CardTitle";
import {CardImage} from "../../components/Card/CardImage";
import {CardText} from "../../components/Card/CardText";
import './style.css'

const CardContainer = ({title, image, text}) => {
    return <>
        <section className="card-container">
            <div className="title">
                <CardTitle  title={'Hola'}/>
            </div>
            <div className="image">
                <CardImage  image={'la verga'}/>
            </div>
            <div className="text">
                <CardText  text={'jajajá'}/>
            </div>
        </section>
    </>;
}

export {CardContainer};
