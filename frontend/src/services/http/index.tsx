import { PaymentInterface } from "../../interfaces/IPayment";

const apiUrl = "http://localhost:8080";

// async function GetPayment() {
//   const requestOptions = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   let res = await fetch(`${apiUrl}/Payments`, requestOptions)
//     .then((response) => response.json())
//     .then((res) => {
//       if (res.data) {
//         return res.data;
//       } else {
//         return false;
//       }
//     });

//   return res;
// }
async function GetPayment() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(`${apiUrl}/Payments`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });

  return res;
}
async function CreatePayment(data: PaymentInterface) {
  const requestOptions = {
    method: "POST",

    headers: { "Content-Type": "application/json" },

    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/Payment`, requestOptions)
    .then((response) => response.json())

    .then((res) => {
      if (res.data) {
        return { status: true, message: res.data };
      } else {
        return { status: false, message: res.error };
      }
    });

  return res;
}

async function DeletePaymentByID(id: Number | undefined) {
  const requestOptions = {
    method: "DELETE",
  };

  let res = await fetch(`${apiUrl}/Payments/${id}`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });

  return res;
}

async function UpdatePayment(data: PaymentInterface) {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/Payment`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return { status: true, message: res.data };
      } else {
        return { status: false, message: res.error };
      }
    });

  return res;
}
async function GetStatus() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(`${apiUrl}/Statuses`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });

  return res;
}

export {
  CreatePayment,
  GetPayment,
  DeletePaymentByID,
  UpdatePayment,
  GetStatus,
};
