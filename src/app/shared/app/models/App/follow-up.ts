import { FormControl } from "@angular/forms";

export interface IFollowUp {
  names?: string[] | null;
  msg?: string | null;
  no?: string | number | null;
}

export interface IFollowUpForm {
  names?: FormControl<string[] | null>;
  msg?: FormControl<string | null>;
  no?: FormControl<string | number | null>;
}

export interface IFollowUpMessage {
  notes?: string;
  no?: string;
  sNo?: number;
  savedDate?: Date;
  savedUser?: string;
}
