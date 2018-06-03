export function itemsHasErrored(bool) {
  return {
    type: 'ITEM_HAS_ERRORED',
    hasErrored: bool
  }
}

export function itemsIsLoading(bool) {
  return {
    type: 'ITEM_IS_LOADING',
    isLoading: bool
  }
}

export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  }
}

export function itemsFetchData(url) {
  return dispatch => {
    dispatch(itemsIsLoading(true))
    fetch(url)
      .then(resp => {
        if (!resp.ok) {
          throw Error(resp.statusText)
        }
        dispatch(itemsIsLoading(false))
        return resp
      })
      .then(resp => resp.json())
      .then(items => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)))
  }
}
