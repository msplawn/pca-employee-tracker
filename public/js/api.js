const API = {
    async addShift(data) {
        const res = await fetch("/api/", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        });

        const json = await res.json();

        return json;
    }
};