if (indexing_error.get() > 0) {expect(() => x.set($M.colon($M.end-1,2,$M.end-4),3,$M.colon($M.end-5,$M.end-5),1, y)).toThrow();} else {x.set($M.colon($M.end-1,2,$M.end-4),3,$M.colon($M.end-5,$M.end-5),1, y); expect($M.isequal(x, z)).toBeTruthy();}