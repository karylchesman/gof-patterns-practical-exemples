import { Installment } from "./installment";

export interface InstallmentRepository {
  save(installment: Installment): Promise<void>;
  listByLoanId(loan_id: string): Promise<Installment[]>;
}

export class InstallmentRepositoryMemory implements InstallmentRepository {
  installments: Installment[];

  constructor() {
    this.installments = [];
  }

  async save(installment: Installment): Promise<void> {
    this.installments.push(installment);
  }

  async listByLoanId(loan_id: string): Promise<Installment[]> {
    return this.installments.filter(
      (installment) => installment.loan_id === loan_id
    );
  }
}
