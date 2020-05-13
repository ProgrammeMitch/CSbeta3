export class CustomerData {
    data = [{
        name: 'somr',
        phone: '',
        email: '',
        address: '',
        rooms: ''
    }];

    addData(name: string, phone: string, email: string, address: string, rooms: string) {
        this.data.push({
                name: name,
                phone: phone,
                email: email,
                address: address,
                rooms: rooms
        });
    }
}
