x = rand(4, 2, 3);
y = 0;
z = 0;
indexing_error = 0;
try
y = x([1 3 2 4],1,[2 3 1]);
catch
indexing_error = 1;
end
save('-mat', 'result.mat', 'x', 'y', 'z', 'indexing_error')