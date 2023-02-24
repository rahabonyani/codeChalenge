import { Redirect } from "react-router-dom";

import React from "react";
import Cookies from "js-cookie";

type Props = {
    component: React.FC;
    [key: string]: any;
    path?: string;
};

const PrivateRoutes: React.FC<Props> = ({
    path,
    component: Component,
    ...rest
}) => {
    if (Cookies.get("accessToken")) {
        return <Component />;
    }

    return <Redirect to="/register-login" />;
};

export default PrivateRoutes;
