import axios from 'axios';

let base = 'http://localhost:8086/api/admin';

export const requestLogin = params => {
    return axios.post(`${base}/login`, params).then(res => res.data);
}

export const editUser = params => {
    return axios.get(`${base}/user/edit`, {params: params});
}

export const getUserList = params => {

    return axios.get(`${base}/user/list`, {params: params});
}

export const getUserListPage = params => {
    return axios.get(`${base}/user/listpage`, {params: params});
}

export const removeUser = params => {
    return axios.get(`${base}/user/remove`, {params: params});
}

export const batchRemoveUser = params => {
    return axios.get(`${base}/user/batchremove`, {params: params});
}
export const addUser = params => {
    return axios.get(`${base}/user/add`,  params);
}

//Dashboard Report
export const getDashboardReport = params => {
    return axios.post(`${base}/dashboard`,  params);
}

/**
 *Events
 **/
export const addEvent = params => {
    return axios.post(`${base}/events`,  params);
}
export const editEvent = params => {
    return axios.put(`${base}/event/${params.id}`, params);
}
export const deleteEvent = params => {
    return axios.delete(`${base}/events/${params.id}`);
}
export const getEvents = params => {
    return axios.get(`${base}/events`,  params);
}
export const getEvent = params => {
    return axios.get(`${base}/events/${params.id}`);
}
/**
 *eventTickets
 **/
 export const addEventTickets = params => {
     return axios.post(`${base}/events/tickets`,  params);
 }
 export const editEventTicket = params => {
     return axios.put(`${base}/events/tickets/${params.id}`, params);
 }
 export const deleteEventTicket = params => {
     return axios.delete(`${base}/events/tickets/${params.id}`);
 }
 export const getEventTickets = params => {
     return axios.get(`${base}/events/tickets`,  params);
 }
 export const getEventTicket = params => {
     return axios.get(`${base}/events/tickets/${params.id}`);
 }
/**
 *Subscriber
 **/
export const addSubscriber = params => {
    return axios.post(`${base}/subscribers`, params);
}
export const editSubscriber = params => {
    return axios.put(`${base}/subscribers/${params.id}`, params);
}
export const deleteSubscriber = params => {
    return axios.delete(`${base}/subscribers/${params.id}`);
}
export const getSubscribers = params => {
    return axios.get(`${base}/subscribers`, params);
}
export const getSubscriber = params => {
    return axios.get(`${base}/subscribers/${params.id}`);
}

/**
 *Merchandises
 **/
export const addMerchandise = params => {
    return axios.post(`${base}/merchandises`,params);
}

export const editMerchandise = params => {
    return axios.put(`${base}/merchandises/${params.id}`, params);
}
export const deleteMerchandise = params => {
    return axios.delete(`${base}/merchandises/${params.id}`);
}
export const getMerchandises = params => {
    return axios.get(`${base}/merchandises`, params);
}
export const getMerchandise = params => {
    return axios.get(`${base}/merchandises/${params.id}`);
}

/**
 *MerchandiseSales
 **/
export const addMerchandiseSales = params => {
    return axios.post(`${base}/merchandises`,params);
}

export const editMerchandiseSale = params => {
    return axios.put(`${base}/merchandises/sales/${params.id}`, params);
}
export const deleteMerchandiseSale = params => {
    return axios.delete(`${base}/merchandises/sales/${params.id}`);
}
export const getMerchandiseSales = params => {
    return axios.get(`${base}/merchandises/sales/`, params);
}
export const getMerchandiseSale = params => {
    return axios.get(`${base}/merchandises/sales/${params.id}`);
}

/**
 *Tickets
 **/
export const addTickets = params => {
    return axios.post(`${base}/tickets`,params);
}

export const editTicket = params => {
    return axios.put(`${base}/tickets/${params.id}`, params);
}
export const deleteTicket = params => {
    return axios.delete(`${base}/tickets/${params.id}`);
}
export const getTickets = params => {
    return axios.get(`${base}/tickets`, params);
}
export const getTicket = params => {
    return axios.get(`${base}/tickets/${params.id}`);
}

/**
 * TicketOptions
 * @param params
 * @returns {AxiosPromise}
 */
export const addTicketOption = params => {
    return axios.post(`${base}/ticket-options`, params );
}
export const editTicketOption= params => {
    return axios.put(`${base}/ticket-options/${params.id}`, params);
}
export const deleteTicketOption= params => {
    return axios.delete(`${base}/ticket-options/${params.id}`);
}
export const getTicketOptions = params => {
    return axios.get(`${base}/ticket-options`, {params: params});
}
export const getTicketOption = params => {
    return axios.get(`${base}/ticket-options/${params.id}`);
}

/**
 *TicketSales
 **/
export const addTicketSales = params => {
    return axios.post(`${base}/tickets/sales`,params);
}

export const editTicketSale = params => {
    return axios.put(`${base}/tickets/sales/${params.id}`, params);
}
export const deleteTicketSale = params => {
    return axios.delete(`${base}/tickets/sales/${params.id}`);
}
export const getTicketSales = params => {
    return axios.get(`${base}/tickets/sales`, params);
}
export const getTicketSale = params => {
    return axios.get(`${base}/tickets/sales/${params.id}`);
}


/**
 *OrderProducts
 **/
export const addOrderProducts = params => {
    return axios.post(`${base}/orders/products`,params);
}
export const editOrderProduct = params => {
    return axios.put(`${base}/orders/products/${params.id}`,params);
}
export const deleteOrderProduct = params => {
    return axios.delete(`${base}/orders/products/${params.id}`);
}
export const getOrdersProducts= params => {
    return axios.get(`${base}/orders/products`, {params: params});
}
export const getOrderProduct = params => {
    return axios.get(`${base}/orders/products/${params.id}`);
}


export const uploadFile = params => {
    return axios({method:params.method ,url: `${params.url}`, data : params.data});
}
