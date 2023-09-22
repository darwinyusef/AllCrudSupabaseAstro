import { supabase } from './supabase';

const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get('type');
const userId = urlParams.get('id');

if (type == 'insert') {
    document.getElementById("sendForm").addEventListener("click", getLastId, false);
} else if (type == 'edit') {
    getUserId();
    document.getElementById("sendForm").addEventListener("click", editItem, false);
} else {
    window.location.href = '/404'
}

async function getLastId(event) {
    event.preventDefault();
    let { data: user, error } = await supabase.from("user").select('*');
    if (error == null) {
        if (user[user.length - 1].id) {
            insert(user[user.length - 1].id);
        }
    }
}

async function getUserId() {
    let { data: user, error } = await supabase.from("user").select('*').eq('id', userId);
    document.getElementById("inputname").value = user[0].name; 
    document.getElementById("inputemail").value = user[0].email;
}

async function insert(id) {

    let name = document.getElementById("inputname").value
    let email = document.getElementById("inputemail").value

    const { data, error } = await supabase
        .from('user')
        .insert([
            { name, email, activation: true, id: id + 1 },
        ])
        .select()
    if (error == null) {
        window.location.href = `/found/${data[0].id}`
    }
}

async function editItem(event) {
    event.preventDefault();
    let name = document.getElementById("inputname").value
    let email = document.getElementById("inputemail").value

    const { data, error } = await supabase
        .from('user')
        .update({ name, email, activation: true })
        .eq('id', userId)
        .select()
    if (error == null) {
        window.location.href = `/found/${data[0].id}`
    }
}

