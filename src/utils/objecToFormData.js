export function objectToFormData(data) {
    let form_data = new FormData();

    Object.entries(data).forEach(([key, value]) => {
        form_data.append(key, value);
    });

    return form_data;
}