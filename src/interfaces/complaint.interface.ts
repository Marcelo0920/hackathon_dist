export interface Complaint {
  _id: string;
  title: string;
  description: string;
  photos: string[];
  state: string;
  latitude: number;
  longitude: number;
  observation: string | null;
  typeComplaintId: string;
  personId: string;
  createdAt: Date;
  prioridad: string;
}

interface ComplaintElements extends HTMLFormControlsCollection {
  observation: HTMLTextAreaElement;
  state: HTMLSelectElement;
}

export interface ComplaintCustomForm extends HTMLFormElement {
  readonly elements: ComplaintElements;
}
