export const logger = (store) => (next) => (action) => {
  console.group(action.type)
    console.log('the old state is: ', store.getState())
    const res = next(action)
    console.log('the new state is: ', store.getState())
  console.groupEnd()
  return res
}
