import React from "react";
import { Button, message } from "antd";
import AppLayout from "@/layouts/app-layout";
import FormRole from "@/modules/settings/form-role";

const PageViewRole = (props) => {
    const { data, meta, filters, processing } = props;
    console.log("🌱 page.roles.view:", props);

    return (
        <AppLayout
            title={`Edit ruolo - Amministratore`}
            backLink="/settings/roles"
            extra={
                <Button
                    type="primary"
                    onClick={() =>
                        message.success("Ruolo creato con successo!")
                    }
                >
                    Salva
                </Button>
            }
        >
            <div className="data-content">
                <FormRole initialData={data} />
            </div>
        </AppLayout>
    );
};

export default PageViewRole;