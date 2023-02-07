import { takeEvery, put } from 'redux-saga/effects'
import { movieActionCreater } from '../reducers/movieReducer';
import { Get_NowPlayingMovie_url } from "../../Services/url"
import { axiosService } from "../../Services/axios.service"


function* getNowPlayingMovie(action) {
   
    console.log("nowplaying saga")
    let payload = yield axiosService({
        method: "GET",
        url: `${Get_NowPlayingMovie_url}/now_playing`,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        params: { api_key: "a501016df75ba02be8137f4996f56d90", language: "en-US", page: 1 }
    })
    console.log(payload)
    
    
    yield put({ type: movieActionCreater.listHandler, payload });
}

function* nowplayingMovieSaga() {
    yield takeEvery("nowPlayingMovie_saga", getNowPlayingMovie)
}

export default nowplayingMovieSaga;