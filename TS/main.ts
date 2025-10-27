let catName = 'newnew';
let catAge = 3;

let rating: Array<string> = ['A', 'B', 'C'];
let arNumber: Array<number> = [1, 2, 3];
let mangLong: Array<Array<number>> = [[1, 2], [3, 4]]

//1 function
function khaiBaoCuaFunc(): string {
    return 'hello';
}
function tinhTong(a: number) {
    return a + 10;
}
//2 tham số bắt buộc và không bắt buộc (giá trị không bắt buộc phải để sau giá trị bắt buộc)
function tinhsToan(name: string, b?: string) {
    if (b) {
        return `xin chào ${name} ${b}`;
    }
    return `xin chào ${name}`;
}

//3 rest parameter [...friends là một mảng nó sẽ gom tất cả các giá trị còn lại truyền vào thành một mảng]
function gatherFriends(groupName: string, ...friends: string[]) {
    return `Group: ${groupName}, Friends: ${friends.join(", ")}`;
}
gatherFriends('nhóm 1', 'A', 'B', 'C', 'D');
// trả ra sẽ là Group: nhóm 1, Friends: A, B, C, D

//4 type aliases
export type Customer = {
    id: number,
    name: string,
}

export type UserResponse = {
    success: boolean,
    message: string
}
function greetCustomer(customer: Customer): UserResponse {
    return {
        success: true,
        message: `Hello ${customer.name}`
    }
}

// function signature

type SupportFunction = (customer: Customer) => UserResponse;

const greetCustomer2: SupportFunction = (customer) => {
    return {
        success: true,
        message: `Hello ${customer.name} from function signature`
    }
}

const greetCustomer3: SupportFunction = (customer) => {
    return {
        success: true,
        message: `Hello ${customer.name} chúc bạn một ngày tốt lành!`
    }
}

//7 union & literal types
type UserId = string | number;

function getTicket(id: UserId) {
    if (typeof id === 'string') {
        return `Ticket code is ${id.toUpperCase()}`;
    } else {
        return `Ticket number is ${id.toFixed(0)}`;
    }
}
getTicket(1);

let mixedAray: Array<string | number> = [1, 'A', 2, 'B'];
mixedAray.push(3);

type UserType = {
    userName: string,
    age: number,
    phone: string | number,
    theme: string
}

type UserType2 = {
    userName: string,
    age: number,
    phone: string | number,
    theme: 'light' | 'dark'
}

//8 intersection types (&)
type Person = {
    name: string,
}

type Worker = {
    job: string,
};

//9 never type
type OrderStatus = 'pending' | 'shipped' | 'delivered' | 'cancelled';
function handleOrderStatus(status: OrderStatus) {
    if (status === 'pending') {
        return 'Order is pending';
    } else if (status === 'shipped') {
        return 'Order is shipped';
    } else if (status === 'delivered') {
        return 'Order is delivered';
    } else if (status === 'cancelled') {
        return 'Order is cancelled';
    } else {
        const check: never = status;
    }
}

//10 Interface
interface User{
    id: number,
    name: string,
    email: string,
    phone: number
}

const User: User = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: 1234567890
};

// inheritance (kế thừa)
interface IUser{
    name: string,
    age: number,
}

interface IEmloyee {
    job: string,
    salary: number,
}

interface IStaff extends IUser, IEmloyee {
    department: string,
}
const staffMember: IStaff = {
    name: 'Jane Smith',
    age: 28,
    job: 'Software Engineer',
    salary: 80000,
    department: 'Development'
};