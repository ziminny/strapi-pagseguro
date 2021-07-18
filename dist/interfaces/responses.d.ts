export interface PaymentResponse {
    /**
     *  Código da transação
     *  @type string
     */
    code: string;
    /**
     *  Mensagem
     *  @type string
     *  @Values SUCESSO , DECLINED
     */
    message: 'SUCESSO' | 'DECLINED';
    /**
     *  Referência do pagamento
     *  @type string
     */
    reference: string;
}
export interface Card {
    /**
     *  Id da transação , esse id é ussado para confirmar o pagamento
     *  @type string
     */
    id: string;
    /**
     *  Bandeira do cartão
     *  @type string
     *  @values VISA , MASTERCARD
     */
    brand: string;
    /**
     *  Primeiros digítos do cartão
     *  @type string
     */
    first_digits: string;
    /**
     *  Últimos digítos do cartão
     *  @type string
     */
    last_digits: string;
    /**
     *  Mês de expiração
     *  @type string
     */
    exp_month: string;
    /**
     *  Anio de expiração
     *  @type string
     */
    exp_year: string;
    /**
     *  Dados do cliente , nome cartão
     *  @type Holder
     */
    holder: Holder;
    /**
     *  @type boolean
     */
    store: boolean;
}
export interface Holder {
    /**
     *  Nome igual do cartão
     *  @type string
     */
    name: string;
}
export interface PaymentMethod {
    /**
     *  Tipo do cartão , crédito , debito
     *  @type string
     */
    type: string;
    /**
     *  Números de parcelas
     *  @type number
     */
    installments: number;
    /**
     *
     *  @type boolean
     */
    capture: boolean;
    /**
     *  Dados do cartão
     *  @type Card
     */
    card: Card;
    /**
     *
     *  @type string
     */
    soft_descriptor: string;
}
export interface Summary {
    /**
    *  Valor total do pagamento
    *  @type number
    */
    total: number;
    /**
     *  Valor total pago
     *  @type number
     */
    paid: number;
    /**
     *  Caso aceito retorna 0
     *  @type number
     */
    refunded: number;
}
export interface Amount {
    /**
     *  Valor unitário
     *  @type number
     */
    value: number;
    /**
     *  Moeda
     *  @type string
     *  @values BRL , ...
     */
    currency: string;
    /**
     *
     *  @type Summary
     */
    summary: Summary;
}
export interface Links {
    /**
     *  Redirecionamento
     *  @type string
     */
    rel: string;
    /**
     *  Link do pagamento
     *  @type string
     */
    href: string;
    /**
     *  application/json
     *  @type string
     */
    media: string;
    /**
     *  Dados do cliente , nome cartão
     *  @type string
     *  @values POST , GET
     */
    type: 'POST' | 'GET';
}
export interface ResponsePagseguro {
    /**
     *  Id da transação
     *  @type string
     */
    id: string;
    /**
     *  Id passado na requisição
     *  @type string
     */
    reference_id: string;
    /**
     *  Status da transação
     *  @type string
     */
    status: string;
    /**
     *  Data da geraçao do card id
     *  @type Date
     */
    created_at: Date;
    /**
     *  Data da geraçao do card id
     *  @type Date
     */
    paid_at: Date;
    /**
     *  Descrição do pagamento
     *  @type string
     */
    description: string;
    /**
     *  Detalhes do pagamento
     *  @type Amount
     */
    amount: Amount;
    /**
     *  Status da transação
     *  @type Amount
     */
    payment_response: PaymentResponse;
    /**
     *  Detalhes do pagamento
     *  @type Amount
     */
    payment_method: PaymentMethod;
    /**
     *  Url de notificação
     *  @url https://meusite.com.br/id=myId
     *  @type Amount
     */
    notification_urls: Array<any>;
    /**
     *
     * @type Object
     */
    metadata: Object;
    /**
     *  Links para consultar o pagamento
     *  @type Array
     */
    links: Links[];
}
