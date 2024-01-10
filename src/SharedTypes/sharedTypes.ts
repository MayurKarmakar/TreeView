export type EmailContact = {
  name: string;
  address: string;
};

export type EmailCommunication = {
  subject: string;
  body: string;
};

export type IncidentEmail = {
  to: EmailContact;
  cc: EmailContact;
};

export type IncidentCommunication = {
  detected: EmailCommunication;
  ongoing: EmailCommunication;
};

export type IncidentType = {
  status: string;
  email: {
    to: EmailContact;
    cc: EmailContact;
    communications: IncidentCommunication;
  };
  sms: Record<string, never>;
};

export type Seal = {
  id: string;
  key: string;
  Value: string;
};

export type Product = {
  id: string;
  type: {
    incident: IncidentType;
  };
};

export type Client = {
  domain: string;
  context: string;
  id: string;
  active: string;
  seals: Seal[];
  product: Product[];
};
