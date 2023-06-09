//import { useAuthStore } from "@/stores/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {

    if (process.server) return

    try {
        const response = await $fetch.raw('/api/validate', {method: 'GET'})

        if(response.status !== 200 || response._data !== "OK") {
            return navigateTo('/')
        }
    } catch (error) {
        
    }

})