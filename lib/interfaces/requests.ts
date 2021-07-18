export interface Card {

  /**
   *  Número do cartão
   *  @type string
   */
   number?:string

   /**
    *  Mês de expiração
    *  @types string
    */
    exp_month?:string

    /**
     *  Ano de expiração
     *  @types string
     */
    exp_year?: string

    /**
     *  Código de segurança
     *  @type string
     */
     security_code:string

     id?:string
}

export interface PaymentMethod {

  /**
   *  Tipo de pagamento
   *  @type string
   */
  type:string

  /**
   *  Número de parcelas
   *  @type int
   */
   installments:number

   /**
    *  
    *  @type boolean
    *  @default true
    */
    capture :boolean

    /**
     *  Dados do cartão
     *  @type Card interface
     */
    card:Card
}

export interface Amount {

  /**
   *  Valor do produto , considerar 100 p/ 1
   *  @type int
   */
  value:number

  /**
   *  Moeda => BRL
   *  @type string
   */
  currency:string
   
}

export interface RequestParamsPagseguro {

  /**
   *  Id de referência 
   *  @type string
   */
  reference_id:string

  /**
   *  Descrição do produto
   *  @type string
   */
  description:string

  /**
   *  Moeda e quantidade
   *  @type Amount interface
   */
  amount:Amount

  /**
   *  Dados do pagamento
   *  @type PaymentMethod
   */
  payment_method:PaymentMethod
  
}