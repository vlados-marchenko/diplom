import React from "react";
import HeaderSite from "../../components/Header/HeaderSite";
import ModalWindow from "../../components/ModalWindow/Register/ModalWindow";
import HomeContent from "../../components/Content/HomeContent/HomeContent";
import ModalSign from "../../components/ModalWindow/log/ModalSign";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import UsesStuffContent from "../../components/Content/UsesStuffContent/UsesStuffContent";

const Stuff = () => {
 
    return (
        <MainLayout>
            <UsesStuffContent />
        </MainLayout>
    )
}

export default Stuff;