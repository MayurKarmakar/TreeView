import { Client } from "../SharedTypes/sharedTypes";

export const clientExampleData: Client[] = [
  {
    domain: "1234",
    context: "Client",
    id: "ClientUid123",
    active: "yes",
    seals: [
      {
        id: "123",
        key: "h2clientId",
        Value: "Company01",
      },
      {
        id: "456",
        key: "MyclientId",
        Value: "Company02",
      },
    ],
    product: [
      {
        id: "prodUid01",
        type: {
          incident: {
            status: "active",
            email: {
              to: {
                name: "Nemai Ghosh",
                address: "a@b.com",
              },
              cc: {
                name: "Mayur",
                address: "b@c.com",
              },
              communications: {
                detected: {
                  subject: "test subject",
                  body: "test body",
                },
                ongoing: {
                  subject: "test subject",
                  body: "test body",
                },
              },
            },
            sms: {},
          },
        },
      },
    ],
  },
];
