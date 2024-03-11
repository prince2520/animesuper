export const getAlertIconAndColor = (success = false) => {
    let data = {
        primaryColor: `var(--error)`,
        secondaryColor: `var(--error-bold)`,
        icon: 'subway:error'
    }

    if (success)
        data = {
            primaryColor: `var(--success)`,
            secondaryColor: `var(--success-bold)`,
            icon: 'mdi:check-circle-outline'
        }

    return data;
};

