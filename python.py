from sklearn import tree
from sklearn.datasets import load_iris

# load iris dataset as an example
iris = load_iris()
X = iris.data
y = iris.target

# create decision tree classifier
clf = tree.DecisionTreeClassifier()

# train the model
clf = clf.fit(X, y)

# predict the label for a new sample
print(clf.predict([[0.1, 0.2, 0.3, 0.4]]))
