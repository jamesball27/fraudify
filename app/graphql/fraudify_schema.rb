FraudifySchema = GraphQL::Schema.define do
  mutation(Types::MutationType)
  # mutation(Types::MutationType)
  query(Types::QueryType)
end
